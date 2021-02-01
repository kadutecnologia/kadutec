import Template from "../components/template.js"

function Blog(){
    return (<div>
        <Template />
        <main>
                <h2>Bem-vindos ao Blog!</h2>
                <a href="./blog/2021-02-01-primeiro-texto">O que você acha?</a>
        </main>
    </div>)
}

export default Blog