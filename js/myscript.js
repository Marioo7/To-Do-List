var btn = document.querySelector('button');

btn.addEventListener('click',function(){
	var txtBox = document.querySelector('input');
	var txtVal = txtBox.value.trim();
	var ul1 = document.querySelector('ul');
	
	var newLi = document.createElement('li');
	var newP = document.createElement('p');
	newP.textContent = txtVal;
	
	var newSpan = document.createElement('span');
	newSpan.textContent = 'Remove';
	
	newSpan.addEventListener('click',function(){
		this.parentElement.remove();
	})
		
	newLi.append(newP);
	newLi.append(newSpan);
	ul1.prepend(newLi);
	
	txtBox.value = '';
	txtBox.focus();
	
	
});


