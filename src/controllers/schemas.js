const schemas = `

create table produtos(
    id serial primary key,
    nome varchar(150) not null,
    imagem text,
    descricao varchar(2000) not null,
    estoque int,
    status boolean default false,
    preco float
);
`;


module.exports = schemas;