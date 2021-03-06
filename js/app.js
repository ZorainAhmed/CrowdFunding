const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function(){
	//linksContainer.classList.toggle("show-links");
	const containerHeight = linksContainer.getBoundingClientRect().height;
	//console.log(containerHeight);
	const linksHeight = links.getBoundingClientRect().height;
	//console.log(linksHeight);

	if(containerHeight === 0){
		linksContainer.style.height = `${linksHeight}px`;
	} else {
		linksContainer.style.height = 0;
	}
});
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

// window.addEventListener("scroll",function(){
// 	const scrollHeight = window.pageYOffset;
// 	const navHeight = navbar.getBoundingClientRect().height;

// 	if(scrollHeight > navHeight){
// 		navbar.classList.add("fixed-nav");
// 	}
// 	else{
// 		navbar.classList.remove("fixed-nav");
// 	}

// 	if(scrollHeight > 500){
// 		topLink.classList.add("show-link");
// 	} 
// 	else{
// 		topLink.classList.remove("show-link");
// 	}
// });


const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link){
	link.addEventListener('click',function(e){
		//prevent default
		e.preventDefault();
		// navigate to specific spot
		const id = e.currentTarget.getAttribute('href').slice(1);
		//console.log(id);
		const element = document.getElementById(id);

		//calculate height
		
		const navHeight = navbar.getBoundingClientRect().height;
		const containerHeight = linksContainer.getBoundingClientRect().height;
		const fixedNav = navbar.classList.contains('fixed-nav');
		let position = element.offsetTop - navHeight;

		if(!fixedNav){
			position = position-navHeight;
		}
		if(navHeight > 82)
		{
			position = position + containerHeight;
		}
		//console.log(position);
		window.scrollTo({
			left:0,
			top:position,
		});
		linksContainer.style.height = 0;
	});
});
// let replyAndIcon = document.querySelector('#reply__icon');

function replyForm() {
    let replyform = document.querySelector('.replyform')
    if (replyform.style.display === 'block') {
        replyform.style.display = 'none';
    } else {
        replyform.style.display = 'block';

    }
}

document.querySelector('.replybtn').addEventListener('click', () => {
    addComment();
})

function addComment() {

    // profileAndParagraph: whole reply comment div: image, name,delete,edit,day,paragraph,score
    let profileAndParagraph = document.createElement('div')
    profileAndParagraph.className = 'profileAndParagraph';

    //profileBtnsDiv: image, name,day,delete,edit
    let profileBtnsDiv = document.createElement('div');
    profileBtnsDiv.className = 'profileBtnsDiv';

    //profileAndDateDiv: image,name,you,day
    let profileAndDateDiv = document.createElement('div');
    profileAndDateDiv.className = 'profileAndDateDiv';

    // userImage: image
    let userImage = document.createElement('img');
    userImage.className = 'userimage';
    userImage.src = 'images/avatars/image-juliusomo.png';

    // name: username
    let name = document.createElement('span');
    name.innerHTML = 'Zorain';
    name.className = 'commentBoxName';

    // you: 'you'
    let status = document.createElement('span');
    status.innerHTML = 'you';
    status.className = 'you';

    //createdAt: created at date
    let createdAt = document.createElement('span');
    createdAt.innerHTML = '2days ago';
    createdAt.className = 'createdAt';


    // profileAndDateDiv: append name,date,status,createdat;
    profileAndDateDiv.append(userImage, name, status, createdAt);

    // buttonsDiv: delete, edit 
    let buttonsDiv = document.createElement('span');
    buttonsDiv.className = 'buttonsDiv';

    // deleteBtn: delete button
    let deleteBtn = document.createElement('span');
    deleteBtn.innerHTML = 'Delete';
    deleteBtn.className = 'deleteBtn';

    // editBtn: edit button
    let editBtn = document.createElement('span');
    editBtn.innerHTML = 'Edit';
    editBtn.className = 'editBtn';

    // buttonsDiv: deleteBtn, editBtn 
    buttonsDiv.append(deleteBtn, editBtn);

    // profileBtnsDiv: profileAndDateDiv,buttonsDiv
    profileBtnsDiv.append(profileAndDateDiv, buttonsDiv)

    // contentDiv: content of the comment
    let contentDiv = document.createElement('div');
    contentDiv.className = 'contentDiv';

    //contentPara: paragraph
    let contentPara = document.createElement('p');
    contentPara.className = 'contentPara';

    // contentDiv:contentPara
    contentDiv.append(contentPara);


    // score div
    let scoreDiv = document.createElement('div');
    scoreDiv.className = 'scoreDiv';

    // ask for help here adding svg dynamically?

    // plusScore: add score span
    let plusScore = document.createElement('span');
    plusScore.className = 'plusScore';
    plusScore.innerHTML ='+';

    // totalScore: total score span
    let totalScore = document.createElement('span');
    totalScore.className = 'totalScore';
    totalScore.innerHTML = '12';

    //minusScore:minus score span
    let minusScore = document.createElement('span');
    minusScore.className = 'minusScore';
    minusScore.innerHTML = '-';

    // scoreDiv: plusScore, totalScore, minusScore 
    scoreDiv.append(plusScore, totalScore, minusScore);


    profileAndParagraph.append(profileBtnsDiv, contentDiv, scoreDiv)


    
    // select textarea from index.html
    let commentText = document.querySelector('.textarea').value;

    
    contentPara.innerHTML = commentText;

    // add the content to paragraph on page
    let commentDiv = document.querySelector('.user__one');
    commentDiv.append(profileAndParagraph);


    

    // displaying reply form to none after form submit
    let replyform = document.querySelector('.replyform')
    replyform.style.display = 'none';



    // add and delete score to be done later
    document.querySelector('.plusScore').addEventListener('click',()=>{
        console.log('add to total')
    })
    document.querySelector('.minusScore').addEventListener('click',()=>{
        console.log('subtract from total')
    })
    


}

function hasClass(e, className) {
    return e.className.split(' ').indexOf(className) > -1;
}

document.querySelector('.user__one').addEventListener('click', function (e) {
    if (hasClass(e.target, 'deleteBtn')) {
        // show prompt box
        showAlertBox();
            

    } 
    // edit
    else if (hasClass(e.target, 'editBtn')) {
        // get paragraph and remove from the dom
        let contentPara = document.querySelector('.contentPara');
        contentPara.remove()

        // create a new textarea
        let newTextArea = document.createElement('textarea');

        // @edit textarea span
        let usernameSpan=document.createElement('span');
        usernameSpan.className='usernameSpan';
        usernameSpan.innerHTML='@amyrobson ';
        usernameSpan.style.color='hsl(238, 40%, 52%)';

        // newTextarea content will be equal to content paragraph
        newTextArea.append(usernameSpan.innerHTML,contentPara.innerHTML);
        newTextArea.className='newTextArea';

        let profileAndParagraph=document.querySelector('.profileAndParagraph');

        let updateBtn = document.createElement('button');
        updateBtn.className='updateBtn';
        updateBtn.innerHTML='UPDATE';

        profileAndParagraph.append(newTextArea,updateBtn);

        // updating content
        updateBtn.addEventListener('click',()=>{
            
            // newTextArea created above
            let newTextArea = document.querySelector('.newTextArea');
            newTextArea.remove();

            // create new paragraph for the removed newTextArea;
            let newParagraph=document.createElement('p');
            newParagraph.className='newParagraph';
            newParagraph.innerHTML=newTextArea.value;

            // remove update btn from dom
            let updateBtn=document.querySelector('.updateBtn');
            updateBtn.style.display='none';

            // add updated content to dom
            let contentDiv = document.querySelector('.contentDiv');
            contentDiv.append(newParagraph.innerHTML);
        })
    }
})

function showAlertBox() {
    document.getElementById("overlay").style.display = "block";

}
document.getElementById('cancel').addEventListener('click',()=>{
    document.getElementById("overlay").style.display = "none";

})
document.getElementById('delete').addEventListener('click',()=>{
    let profileAndParagraph=document.querySelector('.profileAndParagraph');
    profileAndParagraph.remove();
    document.getElementById("overlay").style.display = "none";

})
 

function bookmark(a) {
	pageTitle=document.title;
	pageURL=document.location;
	try {
		// Internet Explorer solution
		eval("window.external.AddFa-vorite(pageURL, pageTitle)".replace(/-/g,''));
	}
	catch (e) {
		try {
			// Mozilla Firefox solution
			window.sidebar.addPanel(pageTitle, pageURL, "");
		}
		catch (e) {
			// Opera solution
			if (typeof(opera)=="object") {
				a.rel="sidebar";
				a.title=pageTitle;
				a.url=pageURL;
				return true;
			} else {
				// The rest browsers (i.e Chrome, Safari)
				alert('Press ' + (navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Cmd' : 'Ctrl') + '+D to bookmark this page.');
			}
		}
	}
	return false;
}

// function ShowAndHideDiv() {
//     let radioChecked = document.querySelector('input[name = "optradio"]:checked');
//     if(radioChecked != null){ 
//         //alert(radioChecked.value); 
//         let modalParent = document.querySelector('.model-title').parentElement;
//         alert(modalParent);
//     } else if(radioChecked === null){
//         alert('Nothing checked');
//     }
// }

$('input[name="optradio"]').click(function(){
    $('.modal-title-wrap').removeClass('active');
    $(this).parents('.modal-title-wrap').addClass('active');
})

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

$('.modal-title-wrap .button-1').click(function(){
    console.log('clicked')
    let currentBacked = $('#currentBacked').html();
    currentBacked = currentBacked.replace(/\D/g, "");
    console.log(currentBacked);
    let submittedValue = $('.modal-title-wrap.active').find('.pledge-input').val();
    currentBacked = parseInt(currentBacked)+parseInt(submittedValue);
    console.log(parseInt(numberWithCommas(parseInt($('#totalBackers').html().replace(/\D/g, "")))));
    $('#currentBacked').html("$"+numberWithCommas(currentBacked));

    $('#totalBackers').html(numberWithCommas( parseInt($('#totalBackers').html().replace(/\D/g, ""))+1 )) 
    
    
    let selectedValue = $('.modal-title-wrap.active').find('input[type="radio"]').val();
    let selectedTotalNumbersEl = $('.'+selectedValue+"-left");
    selectedTotalNumbersEl.html(parseInt(selectedTotalNumbersEl.html())-1)

    $('.btn-close').click();

})