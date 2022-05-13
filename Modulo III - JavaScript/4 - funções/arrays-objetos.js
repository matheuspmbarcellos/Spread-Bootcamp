// ARRAYS

    // Spread
    function sum(x, y, z) {
        return x + y + z;
    }

    const numbers = [1, 2, 3]
    console.log(sum(...numbers))

    // Rest
    function confereTamanho(...args) {
        console.log(args.length)
    }

    confereTamanho()
    confereTamanho(1, 2)
    confereTamanho(3, 4, 5)

// OBJETOS

    //Object destructuring
    const user = {
        id: 42,
        displayName: 'jdoe',
        fullName: {
            firstName: 'John',
            lastName: 'Doe'
        }
    };

    function userId({id}) {
        return id;
    }

    function getFullName({fullName:{firstName: first, lastName: last}}) {
        return `${first} ${last}`;
    }

    console.log(userId(user));
    console.log(getFullName(user));