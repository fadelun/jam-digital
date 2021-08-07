const updateTime = () => {
    const date = new Date();
        day = date.getDay();
        hour = date.getHours();
        min = date.getMinutes();
        sec = date.getSeconds();

        const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        const values = [hour,min,sec];

        days.forEach( (item,index) => {
            if(day == index){
                document.querySelector('.day').innerHTML = item
            }
        })

        for(let i =0;i < values.length;i++){
            document.querySelectorAll('span')[i].innerHTML = values[i]
        }

        // AM digunakan dari pukul 12:00 (00:00 atau tengah malam) sampai dengan 11:59 (siang). 
        // Sedangkan PM digunakan ketika jam menunjukkan 12:00 (siang) sampai 11:59 (23:59 atau tengah malam).
        if(hour > 11){
            document.querySelector('.period').innerHTML = 'PM';
        }else{
            document.querySelector('.period').innerHTML = 'AM';
        }

}

window.setInterval(updateTime, 100);