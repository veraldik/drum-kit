var buttonAudioMap = {
  'boom-button': 'boom-sound',
  'clap-button': 'clap-sound',
  'hihat-button': 'hihat-sound',
}

Object.keys(buttonAudioMap).forEach(function (buttonId) {
  var buttonElement = document.getElementById(buttonId)
  buttonElement.addEventListener('click', function () {
    var audioElement = document.getElementById(buttonAudioMap[buttonId])
    audioElement.play()
  })
})
