ucFirst("вася") == "Вася";

function ucFirst(str){
    return str && str[0].toUpperCase()+str.substring(1)
}