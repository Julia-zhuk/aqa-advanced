function coneVolume(radius, height) {
    return (1/3) * Math.PI * Math.pow(radius, 2) * height;
}

// Example usage
const radius = 5;
const height = 10;
console.log(`The volume of the cone is: ${coneVolume(radius, height)}`);