const googleSearch = require('./script');
dbMock=[
    'dog.com',
    'cheese.com',
    'dogpictures.com',
    'corgi.com',
    'puppy.com',
    'dogs.com',
    'dogpictures.com',
    'puppies.com',
]

it('this is a test', () => {
    expect(2+2).toBe(4);
});

it('simple test', () =>{
    expect(googleSearch('dog', dbMock)).toEqual(['dog.com','dogpictures.com','dogs.com']);
    expect(googleSearch('dog', dbMock).length).toEqual(3)
    expect(googleSearch('ewgweg', dbMock)).toEqual([]);
})