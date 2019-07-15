class Calculator{
    constructor(previous,current){

        this.previous=previous
        this.current=currrent
        this.clear()
    }

    clear(){
        this.previous=''
        this.current=''
        this.current=undefined;

    }

    delete(){

    }

    append(number){
        if(number==='.' &&this.current.includes('.'))return
        this.current=this.current.toString()+number.toString()

    }

    operation(operation){
       if(this.current==='')return
       if(this.previous!==''){
           this.compute()
       }
        this.operation=operation
        this.previous=this.current
        this.current=''


    }

    compute(){
        let computation
        const prev=parseFloat(this.previous)
        const curr=parseFloat(this.current)
        if(isNaN(prev)|| isNaN(curr))return
        switch(this.operation){
            case '+':
                computation=prev+curr
                break

            case '-':
                computation=prev-curr
                break

            case '*':
                computation=prev*curr
                break

            case '/':
                computation=prev/curr
                break

            default:
                return
    
        }
        this.current=computation
        this.operation=undefined
        this.previous=''

    }
    update(){
        this.current.innerText=this.current
        this.previous.innerText=this.previous

    }


}


const numberButtons=document.querySelectorAll('[data-number'])
const operationButtons=document.querySelectorAll('[data-operation'])
const equalsButton=document.querySelectorAll('[data-equals'])
const deleteButton=document.querySelectorAll('[data-delete'])
const allclearButton=document.querySelectorAll('[data-all-clear'])
const previous=document.querySelectorAll('[data-previous'])
const current=document.querySelectorAll('[data-current'])

const calculator=new Calculator(previous,current)

numberButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        calculator.append(button.innertext)
        calculator.update()
    })
})

operationButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        calculator.chooseOperation(button.innertext)
        calculator.update()


    })

})

equalsButton.addEventListener('click',button=>{
    calculator.compute();
    calculator.updateDisplay()


})