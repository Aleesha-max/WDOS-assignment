if(localStorage.getItem('role')){

    document.querySelectorAll('*[x-text]').forEach((item) => {
        const editOverlay = document.createElement('div')
        editOverlay.innerText = "Click to Edit"
        editOverlay.classList.add('edit-content')
        
        editOverlay.addEventListener("click",()=>{
            const path = item.getAttribute('x-text').split("$store.home.");
            const text = window.prompt("Enter Text To Edit",item.innerText.split('Click to Edit')[0]);
            if(text){
                console.log(text);
                document.updateObjectData(path[1],text);
            }
            
        })
        
        
    
        item.addEventListener('mouseover', () => {
            item.appendChild(editOverlay);
            item.style.cursor = 'pointer'
        })
    
        
    
        item.addEventListener("mouseout", () => {
            setTimeout(() => {
                item.removeChild(editOverlay);
            }, 2000)
        })
    
    
    })
    document.querySelectorAll('*[x-html]').forEach((item) => {
        const editOverlay = document.createElement('div')
        editOverlay.innerText = "Click to Edit"
        editOverlay.classList.add('edit-content')
        
        editOverlay.addEventListener("click",()=>{
            const path = item.getAttribute('x-html').split("$store.home.");
            const text = window.prompt("Enter Text To Edit",item.innerHTML.split('<div class="edit-content">Click to Edit</div>')[0]);
            if(text){
                console.log(text);
                document.updateObjectData(path[1],text);
            }
            
        })
        
        
    
        item.addEventListener('mouseover', () => {
            item.appendChild(editOverlay);
            item.style.cursor = 'pointer'
        })
    
        
    
        item.addEventListener("mouseout", () => {
            setTimeout(() => {
                item.removeChild(editOverlay);
            }, 2000)
        })
    
    
    })
    }
    document.updateObjectData = (path, value) => {
        const keys = path.split('.');
        let obj = JSON.parse(localStorage.getItem('home'));
        let currentObj = obj;
        console.log(obj);
    
        for (let i = 0; i < keys.length - 1; i++) {
    
            console.log(keys);
            console.log(i, i < keys.length - 1);
            currentObj = currentObj[keys[i]];
    
        }
    
        currentObj[keys[keys.length - 1]] = value;
        console.log();
    
    
        localStorage.setItem('home', JSON.stringify({ ...obj, currentObj }))
        Alpine.store('home', { ...obj, currentObj })
    }
    
    