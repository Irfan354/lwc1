import { LightningElement,track } from 'lwc';

export default class HelloWorld extends LightningElement {
    // one way binding
    name = "image";
    title = " ";

    // two way binding using events
    changeHandler(event){
        this.title = event.target.value;
    }

    // track example
    @track detail ={
        city : "hyderbad",
        country  : "hyderbad",
        code : 4564
    }
    trackHandler(event){
        this.detail.city = event.target.value;
    };

    // getters method
    
}