export function loadAsset(url, responseType = ""){
    const xhr = new XMLHttpRequest();
    xhr.open("get", url);
    xhr.responseType = responseType;
    return new Promise((resolve, reject)=>{
        xhr.onload = resolve;
        xhr.onerror = reject;
        xhr.send();
    });
    
}