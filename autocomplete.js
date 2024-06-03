let availableKeywords = [
    'Sri Bintan Pura, Tanjung Pinang',
    'Roro Dompak, Tanjung Pinang',
    'Telaga Punggur, Batam',
    'Roro Telaga Punggur, Batam',
    'Domestik Sekupang, Batam',
    'Internasional Harbour Bay, Batam',
    'Internasional Batam Center, Batam',
    'Nongsa Pura, Batam',
    'Bulang Tinggi Tanjung Uban, Bintan',
    'BBT Laboi, Bintan',
    'Sri Bayintan Kijang, Bintan',
    'Tanjung Balai Karimun, Karimun',
    'Tanjung Makom, Karimun',
    'Roro Parit Rempang, Karimun',
    'Sri Tanjung, Karimun',
    'Tanjung Batu, Karimun',
    'Moro, Karimun',
    'Tanjung Belian, Karimun',
    'Sei Tenam, Lingga',
    'Tanjung Buton, Lingga',
    'Jagoh, Lingga',
    'Roro Jagoh, Lingga',
    'Letung, Anambas',
    'Tarempa, Anambas',
    'Sedanau, Natuna',
    'Selat Lampa, Natuna',
    'Ranai Penagi, Natuna',
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
            return keyword.toLocaleLowerCase().includes(input.toLocaleLowerCase());
        });
        console.log(result);
    }
    display(result);

    if(!result.length){
        resultsBox.innerHTML = '';
    }
}

    function display(result){
        const content = result.map((list)=>{
            return "<li onclick=selectInput(this)>" + list + "</li>";
        });

        resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
    }

    function selectInput(list){
        inputBox.value = list.innerHTML;
        resultsBox.innerHTML = '';
    }
