function changeEndPoint (caminho) {
  window.location.href = caminho
}

// Fallback em JavaScript caso o meta tag falhe em algum navegador antigo
window.location.href = "./static/index.html";