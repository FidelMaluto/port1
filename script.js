function showContent(section){
    const content = document.getElementById('content');

    if(section === 'sobre'){
        content.innerHTML = `
        <h3>Sobre mim</h3>
        <p>Este portfólio apresenta algumas das minhas competências em desenvolvimento web, com foco em HTML, CSS e JavaScript.</p>
        `;
    }

    if(section === 'skills'){
        content.innerHTML = `
        <h3>Skills</h3>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>
        `;
    }

    if(section === 'projetos'){
        content.innerHTML = `
        <h3>Projetos</h3>
        <p>Portfólio pessoal simples com interação em JavaScript.</p>
        `;
    }

    if(section === 'contato'){
        content.innerHTML = `
        <h3>Contato</h3>
        <p>Email: fidel@email.com</p>
        `;
    }
}
