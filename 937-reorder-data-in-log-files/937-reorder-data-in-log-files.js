/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    //비교 함수 정의
    var compare = (a, b) => {
        len = (a.length < b.length) ? a.length : b.length;
        
        for(i=1;i<len;i++){
            if(a[i] > b[i]) return 1;
                else if(a[i] < b[i]) return -1;
                else continue;
        }
        return 0;
    }
    
    result = new Array();
    size = 0;
    
    for(log of logs){
        if(log[log.length-1]/1 == log[log.length-1]){
            result.push(log);
            continue;
        } else if(result.length == 0){
            result.push(log);
        } else {
            result.unshift(log);
        }
        size += 1;
    }

    sorted = result.slice(0,size).sort((a, b) => compare(a.split(" "), b.split(" ")));
    
    if(JSON.stringify(sorted)==JSON.stringify(result)){
        return result.sort((a,b) => a>b?1:-1);
    }
    
    return sorted.concat(result.slice(size));
};