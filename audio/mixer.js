
class Mixer{
    constructor(numChannels){
        this.numChannels = numChannels;
        this.heap = [];
        this.context = new AudioContext();
    }
    play({buffer, priority, loop}){
        if(this.heap.length == this.numChannels){
            const removed = this._popHeap();
        }
        else{
            this._popHeap();
        }
        const source = this.context.createBufferSource();
        source.buffer = buffer;
        source.connect(this.context.destination);
        source.start(0);
    }

    _reheap(changedIndex){
    }
    _pushHeap(soundDescriptor){
        this.heap.push(soundDescriptor);
    }

    _popHeap(){
        this.heap.pop();
    }

}

export default new Mixer(5);