class Mixer{
    constructor(numChannels){
        this.numChannels = numChannels;
        this.heap = [];
        for(let i = 0; i <numChannels; ++i){
            this.heap.push({
                audioElement: document.createElement("audio"),
                priority: -1
            });
        }
    }
    play({src, priority, loop}){
        const audioElement = this._popHeap();
        const idx = this._pushHeap({
            audioElement,
            priority: priority || 0
        });
        audioElement.src = src;
        audioElement.currentTime = 0;
        audioElement.play();
        if(loop){
            audioElement.loop = true;
            audioElement.onended = null;
        }else{
            audioElement.onended = ()=>{
                this.heap[idx].priority = -1;
                this._reheap(idx);
            }
        }
    }

    _reheap(changedIndex){
        const newIdx = 0;
        return newIdx;
    }
    _pushHeap(soundDescriptor){
        this.heap[0] = soundDescriptor;
        const newIdx = 0;
        return newIdx;
    }

    _popHeap(){
        const removed = this.heap[0];
        const audioElement = removed.audioElement;
       // heap.pop();
        return audioElement;
    }

}

export default new Mixer(5);