type AllEvents =
    | 'click'
    | 'dbclick'
    | 'submit'
    | 'reset'
    | 'keypress';


type MouseEvents =
    Extract<AllEvents, 'click' | 'dbclick'>;


type NonFormEvents =
    Exclude<AllEvents, 'submit' | 'reset'>;

let mouseEvent1: MouseEvents = 'click';
let mouseEvent2: MouseEvents = 'dbclick';

console.log(mouseEvent1);
console.log(mouseEvent2);

let event1: NonFormEvents = 'click';
let event2: NonFormEvents = 'keypress';

console.log(event1);
console.log(event2);

