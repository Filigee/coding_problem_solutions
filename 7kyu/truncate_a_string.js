// https://www.codewars.com/kata/57af26297f75b57d1f000225

function truncateString(str, max_length) {
        
    function truncate(length){
        let truncated_string = ""
        for(let i = 0; i < length; i++){
            truncated_string += str[i]
        }
        return truncated_string + "..."
    }
    
    if(str.length <= max_length) 
        return str
    else if(max_length <= 3){
        truncate(max_length)
    }
    
    return truncate(max_length - 3)
}
