console.log(5)




//

let user = {
    name: 'Alex',
    hair: 32,
    adress: {
        city: 'Minsk',
        house: 12
    },
    laptop: {
        title: 'ZenBook'
    },
    companies: [
        {id: 1, title: 'Epam'},
        {id: 2, title: 'It-Incubator'}
    ],
    familly: {
        father: 'Piter',
        mother: 'Lidia',
        wife: 'Natali',
        douther: "Nika",
        sister: 'Natali'
    }
};

const updateCompany = (user, idCompany, titleCompany) => {
    debugger
    return {
        ...user,
        companies: user.companies.map(company => company.id === idCompany ? {...company, title: titleCompany} : company )
    }
};

console.log(updateCompany(user, 1, 'DFSDFS'))