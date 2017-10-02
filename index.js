const token = getToken()

function getIssues() {
  const fork = `shoppersaysso/javascript-fetch-lab`
    fetch(`https://api.github.com/repos/${fork}/issues`, {
      method: 'get',
      headers: {
        Authorization: `token ${token}`
      }
    }).then(resp => resp.json()).then(data => showIssues(data))
  }

function showIssues(json) {
  var div = document.getElementById("issues")
    for (var i = 0, l = json.length; i < l; i++) {
      $("#issues").append(`<li>${json[i].title}</li>`)
    }

  }

function createIssue() {
  var title = document.getElementById("title").value
  var body = document.getElementById("body").value
  var issue = {title: title, body: body}
  fetch(`https://api.github.com/repos/shoppersaysso/javascript-fetch-lab/issues`, {
    method: 'post',
    headers: {
      'Authorization': `token ${token}`
    },
    body: JSON.stringify(issue)
  }).then(resp => getIssues());

}

function showResults(json) {
  $('#results').append(`<h3>Fork:</h3><a href="${json.html_url}"> ${json.html_url}</a> - ${json.name}`)
}

function forkRepo() {
  fetch(`https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => showResults(json));

}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
