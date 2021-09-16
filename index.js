function findMinAndRemove(array){
    let minNum = array[0];
    let minIndex = 0;
  
    for (let i = 0; i < array.length; i++) {
      if(minNum > array[i]){
        minNum = array[i];
        minIndex = i;
      }
    }

    array.splice(minIndex, 1);
    return minNum;
}

function selectionSort(array){
    let sortedArray = [];
    let minNum;
    
    while(array.length != 0){
      minNum = findMinAndRemove(array);
      sortedArray.push(minNum);
    }
  
    return sortedArray;
  }