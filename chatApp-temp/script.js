//c Vars
// ? Messages section
const messagesArea = document.querySelector('.app-main__body')

//? Channels and friends side menu
const channelsList = document.querySelector('.list-channels__channels')
const friendsList = document.querySelector('.list-friends__friends')

//? Profile sections
const profilePicture = document.querySelector('.profile__picture')
const profileMainInfo = document.querySelector('.profile-info__main')
const profileSecondaryInfo = document.querySelector('.profile-info__secondary')

//c Functions get data from JSON

//? Function: get messages data from json
async function getMessages(url) {
  const response = await fetch(url)
  const json = await response.json()
  const messagesArray = json.messages

  messagesArray.forEach((userObject) => {
    renderMessage(userObject)
  })
}

//?Function: get channels data fro json
async function getChannels(url) {
  const response = await fetch(url)
  const json = await response.json()
  const channelsArray = json.channels
  channelsArray.forEach ( channelObject => {
    renderChannel(channelObject)
  })
}

//? Function: get friends data from json
async function getMyDataAndFriends(url) {
  const response = await fetch(url)
  const json = await response.json()
  const friendsArray = json.members
  const myData = json['my account'][0]

  renderMyProfile(myData)

  friendsArray.forEach( friendObject =>{
    renderFriend(friendObject)
  })
}


//c Function Render
//? Render messages
function renderMessage(userObject){
  let messageBox = document.createElement('div')
  messageBox.classList.add('app__message-box')
  messageBox.innerHTML = `
      <div class="message__profile-picture">
        <img src="${userObject['image-url']}" alt="photo">
        </div>
        <div class="message__text-area">
          <div class="text-area__author">
            <div class="author__name">${userObject.name}</div>
            <div class="author__date">${userObject.time}</div>
          </div>
        <div class="text-area__message">
            <div class="message__text">${userObject.message}</div>
            <div class="message__media">
            ${userObject.media
              ? '<img src="' + userObject.media +'" alt="">'
              : ''}</div>
        </div>
      </div>
    `
    messagesArea.append(messageBox)
}

//? Render channels
function renderChannel(channelObject){
  const channel = document.createElement('li')
  channel.classList.add('channel')

  channel.innerText = '#' + channelObject.channel

  channelsList.append(channel)
}

//? Render my profile
function renderMyProfile(myDataObject){
  const positionDiv = document.createElement('div')
  positionDiv.classList.add('profile-info__position')
  positionDiv.innerText = myDataObject.positionDiv
  profileMainInfo.prepend(positionDiv)

  const nameDiv = document.createElement('div')
  nameDiv.classList.add('profile-info__user')
  nameDiv.innerHTML = `
      <div class="user__name">${myDataObject.name}</div>
      <div class="user__indicator"></div>
    `
  profileMainInfo.prepend(nameDiv)

  profileSecondaryInfo.innerHTML = `
        <div class="info-secondary__username">
          <div class="username__title">Username</div>
          <div class="username__name">${myDataObject.username}</div>
        </div>
        <div class="info-secondary__email">
          <div class="email__title">Email</div>
          <div class="email__address">${myDataObject.email}</div>
        </div>
        <div class="info-secondary__skype">
          <div class="skype__title">Skype</div>
          <div class="skype__username">${myDataObject.skype}</div>
        </div>
        <div class="info-secondary__country">
          <div class="country__title">Country</div>
          <div class="country__name">${myDataObject.country}</div>
        </div>
  `
}

//? Render friends
function renderFriend(friendObject){

  const friend = document.createElement('li')
  friend.classList.add('friend')
  friend.innerHTML = `
      <div class="online-indicator" data-is-online></div>
      <img src="${friendObject['image-url']}" alt="photo">
      <p>${friendObject.name}</p>
    `
  
  friendsList.append(friend)
}