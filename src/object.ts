interface Person {
    name: string;
    age?: number;
}

interface Developer extends Person{
    name: string;
    age?: number;
    skills: string[];
}

const person: Person = {
    name: '육준서',
    age: 27
}

const expert: Developer = {
    name: '김담희',
    skills: ['vue', 'javascript']
};

