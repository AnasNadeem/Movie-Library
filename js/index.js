//Movie template
class Movie{
    constructor(name, actor, actress, type){
    this.name = name;
    this.actor = actor;
    this.actress = actress;
    this.type = type;
    }
}

class Display{
    add(movie){
        //Adding To UI
        let tableBody = document.getElementById('tableBody');
        let uiString = `<tr>
                            <td>${movie.name}</td>
                            <td>${movie.actor}</td>
                            <td>${movie.actress}</td>
                            <td>${movie.type}</td>
                        </tr>`;
        tableBody.innerHTML += uiString;
    }
    clear(){
        let movieForm = document.getElementById('movieForm');
        movieForm.reset();
    }
    validate(movie){
        if(movie.name.length < 2 || movie.actor.length < 2 || movie.actress.length < 2){
            return false;
        }
        else{
            return true;
        }
    }
    show(type, displayMessage){
        let message = document.getElementById('message');
        let boldText;
        if(type==='success'){
            boldText = 'Success';
        }
        else{
            boldText = 'Error!';
        }
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>${boldText}:</strong> ${displayMessage}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">×</span>
                                </button>
                            </div>`;
           setTimeout(function () {
                    message.innerHTML= '';
                   }, 5000);
    }
   
}

//Calling submit button and adding some event listener

let movieForm = document.getElementById('movieForm');
    movieForm.addEventListener('submit', movieFormSubmit);

function movieFormSubmit(e){
     e.preventDefault();
     let name = document.getElementById('movieName').value;
     let actor = document.getElementById('actorName').value;
     let actress = document.getElementById('actressName').value;
     let type;
     let Action = document.getElementById('Action');
     let mystery = document.getElementById('mystery');
     let Horror = document.getElementById('Horror');
     let Romance = document.getElementById('Romance');
     let Series = document.getElementById('Series');
     if(Action.checked){
         type = Action.value;
     }
     else if(Horror.checked){
        type = Horror.value;
     }
     else if(mystery.checked){
        type = mystery.value;
     }
     else if(Romance.checked){
        type = Romance.value;
     }
     else if(Series.checked){
        type = Series.value;
     }

     let movie = new Movie(name, actor, actress, type);
     let display = new Display();

     if(display.validate(movie)){
         display.add(movie);
         display.clear();
         display.show('success', 'Your badass movie has been added');
     }else{
         display.show('danger', 'Sorry the movie has not been added');
     }  
}