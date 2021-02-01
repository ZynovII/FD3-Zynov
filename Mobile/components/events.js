import {EventEmitter} from 'events';

let EditTableEvents=new EventEmitter(); 
// в потоке voteEvents будут все события
// лучше работать не с текстовыми литералами, а объявить переменные с соответствующими значениями

export {EditTableEvents};
