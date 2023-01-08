const buttons = document.querySelectorAll('.buttons .btn')
const notifications = document.querySelector('.notifications')

const toastDetails = {
  timer:5000,
  success: {
    src:'icons/check.png',
    text:'Success! This is a success toast.'
  },
  error: {
    src:'icons/error.png',
    text:'Error! This is a error toast.'
  },
  warning: {
    src:'icons/warning.png',
    text:'Warning! This is a warning toast.'
  },
  info: {
    src:'icons/check.png',
    text:'Info! This is a info toast.'
  },
}

function removeToast(toast) {
  toast.classList.add('hide')
  if(toast.timeoutId) clearTimeout(toast.timeoutId)
  setTimeout(()=> toast.remove(), 500)
}

function createToast (id) {
  console.log(id)
  const toast = document.createElement('li')
  const {text, src} = toastDetails[id]
  toast.className = `toast ${id}`
  toast.innerHTML = `
                    <div class="column">
                      <img class="icon" src="${src}" alt="check">
                      <span>${text}</span>
                    </div>
                    <img src="icons/x.png" alt="delete" onclick="removeToast(this.parentElement)">
  `
  notifications.append(toast)
  toast.timeoutId = setTimeout(()=>removeToast(toast), toastDetails.timer)
}

buttons.forEach(btn=> {
  btn.addEventListener('click', ()=>createToast(btn.id))
})