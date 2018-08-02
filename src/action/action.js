import id from 'uuid';

export function postAction(textTitle, textArea) {
    let data = {
        value: textTitle,
        title: textArea,
        _id: id.v4()
    }

    return dispatch => {
        fetch("/api/blogs", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (res.status == 200) {
                dispatch({
                    type: "ADDBLOG",
                    data: data
                })
            }
        })

    }
}

export function fetchData() {
    return dispatch => {
        fetch('/api/blogs', {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: "ALLPOST",
                    data: data
                })
            })

    }
}

export function deleteBlog(itemId) {
    console.log(itemId)
    return dispatch => {
        fetch('/api/blogs/' + itemId, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: "DELETEBLOG",
                    id: itemId
                })
            })
    }
}

export function updateBlog(text, title, id) {
    console.log(text + "   " + title + "  " + id);
    let data = {
        title: title,
        text: text
    }
    return dispatch => {
        fetch("/api/blogs/" + id, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (res.status == 200) {
                console.log("succ")
                dispatch({
                    type: "UPDATEDATA",
                    title: title,
                    text: text,
                    id: id
                })
            }
        })

    }
}