
class Mixer{
    constructor(numChannels){
        this.numChannels = numChannels;
        this.heap = []; // min heap for priority queue
        this.context = new AudioContext();
    }
    play({buffer, priority, loop, volume}){
        if(this.heap.length == this.numChannels){
            this._popHeap();
        } 
        const source = this.context.createBufferSource();
        const gainNode = this.context.createGain();
        source.buffer = buffer;
        source.loop = loop === undefined? false : loop;
        source.connect(gainNode);
        gainNode.gain.value = volume === undefined ? 1 : volume;
        gainNode.connect(this.context.destination);
        source.start(0);
        const soundDescriptor = {source,priority: priority || 0};
        const idx = this._pushHeap(soundDescriptor);
        source.onended = this._removeSound(soundDescriptor);
        return {
            setVolume(volume){
                gainNode.gain.value = volume;
            }
        };
    }

    _removeSound(soundDescriptor){ //swap with bottom of heap, pop bottom, then heapify down
        return () =>{
            let idx = soundDescriptor.index;
            this.heap[idx].source.onended = null;   
            this.heap[idx].source.stop();
            this.heap[idx] = this.heap[this.heap.length - 1];
            this.heap[idx].index = idx;
            this.heap.pop();

            let temp;
            while(idx < this.heap.length - 1 &&
                (idx * 2 < this.heap.length && 
                    this.heap[idx].priority > this.heap[idx * 2].priority
                ||idx * 2 + 1 < this.heap.length &&
                     this.heap[idx].priority > this.heap[idx * 2 + 1].priority)
            ){
                temp = this.heap[idx];
                if(idx * 2 + 1 >= this.heap.length ||
                    this.heap[idx * 2].priority < this.heap[idx *2 + 1].priority
                ){
                    this.heap[idx] = this.heap[idx * 2];
                    this.heap[idx].index = idx;
                    this.heap[idx * 2] = temp;
                    this.heap[idx * 2].index = idx;
                    idx = idx * 2;
                }
                else{
                    this.heap[idx] = this.heap[idx * 2 + 1];
                    this.heap[idx].index = idx;
                    this.heap[idx * 2 + 1] = temp;
                    this.heap[idx * 2 + 1].index = idx * 2 + 1;
                    idx = idx * 2 + 1;
                }
            }
        };
    }
    _pushHeap(soundDescriptor){ // append to bottom of heap, then heapify up
        soundDescriptor.index = this.heap.push(soundDescriptor) - 1;
        let index = soundDescriptor.index;
        let parentIdx = Math.floor((index - 1)/2);
        let temp;
        while(index !== 0 && this.heap[index].priority < this.heap[parentIdx].priority){
            temp = this.heap[index];
            this.heap[index] = this.heap[parentIdx];
            this.heap[index].index = index;
            this.heap[parentIdx] = temp;
            this.heap[parentIdx].index = parentIdx;
            index = parentIdx;
            parentIdx = Math.floor((index - 1)/2);
        }
        return index;
    }
    _popHeap(){
        this._removeSound({index: 0})();
    }

}

export default new Mixer(5);