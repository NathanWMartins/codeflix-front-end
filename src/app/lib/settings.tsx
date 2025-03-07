export const getAppSettings = (): Promise<{ 
    theme: string, 
    language: string 
}> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                theme: 'dark',
                language: 'en'
            });
        }, 4000);
    });
}

export const getUserInfo = (): Promise<{ 
    name: string, 
    email: string,
    age: number
}> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: 'Nathan W',
                email: 'nathan@gmail.com',
                age: 21
            });
        }, 1000);
    });
}

export async function getUserById(id: string): Promise<User>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await response.json();
    return user;
}

