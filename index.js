// Add your code here
fetch("http://localhost:3000/dogs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                    dogName: "Byron",
                    dogBreed: "Poodle"
                })
                .then(res => {
                    return res.json()
                })

                .then(s = data => console.log(data))
                .catch(error => console.loglog('error'))
});
