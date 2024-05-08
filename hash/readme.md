# Hash Table

## Descrição

HashTable ou HashMap é uma implementação com hash da classe Dictionary.

Hashing consiste em encontrar um valor em uma estrutura de dados o mais rápido possível.

Quando usamos uma função de hash, já sabemos que posição o valor se encontra, então não é necessário percorrer a estrutura toda.

## Colisões

Modos para tratar colisões:

- separate chaining;
- linear probing;
- double hashing;

## Outros métodos hash

- djb2HashCode

## Funções hash boas

Fatores:

- tempo de inserção e acesso de um elemento (só que precisa de mais desempenho)
- baixa probabilidade de colisões

## Implementação do JS

O JS tem a implementação do Map, WeakMap e WeakSet. O Map é o mesmo que nosso dicionário mas que retorna iterators; Já as classes Weak, não retornam os iterators (entries, values, keys) e suas chaves devem ser somente objetos, dessa forma só é possível acessar um elemento se souber a chave (por isso dá de usar propriedades privadas com weak)

### Exemplos de uso

- Bancos de dados relacionais
- Representação de objetos
