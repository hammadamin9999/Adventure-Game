import inquirer from "inquirer";
console.log("\n\t Welcome to Ammad Amin Adventure Game \n");


class Hero {
    name: string;
    health = 100;

    constructor(name: string) {
        this.name = name;
    }
    decreaseHealth() {
        this.health -= 20;
    }
    increaseHealth() {
        this.health = 100;
    }
}

class Enemy {
    name: string;
    health = 100;

    constructor(name: string) {
        this.name = name;
    }
    decreaseHealth() {
        this.health -= 20;
    }
    increaseHealth() {
        this.health = 100;
    }
}

async function main() {
    const { heroName } = await inquirer.prompt([
        {
            type: "input",
            name: "heroName",
            message: "Enter your hero name:"
        }
    ]);

    const { enemyType } = await inquirer.prompt([
        {
            type: "list",
            name: "enemyType",
            choices: ["alien", "witch", "zombie"],
            message: "Enter your enemy type:"
        }
    ]);

    //step 3 battle field


    const hero = new Hero(heroName);
    const enemy = new Enemy(enemyType);
    console.log(`${enemy.name} vs ${hero.name}`);

    
     do {
        const { action } = await inquirer.prompt([{
            // action object
            type: "list",
            name: "action",
            choices: ["attack", "defend", "range target", "run"],
            message: "Choose the attack type to perform action:"
        }]);

        switch (action) {
            case "attack":
                const random = Math.random();
                if (random > 0.5) {
                    hero.decreaseHealth();
                    console.log(`${hero.name} health: ${hero.health}`);
                    console.log(`${enemy.name} health: ${enemy.health}`);
                    if (hero.health <= 0) {
                        console.log("You lost! Try again.");
                        return;
                    }
                } else {
                    // enamy health
                    enemy.decreaseHealth();
                    console.log(`${hero.name} health: ${hero.health}`);
                    console.log(`${enemy.name} health: ${enemy.health}`);
                    if (enemy.health <= 0) {
                        console.log("Congratulations, you won!");
                        return;
                    }
                }

                break;
        }
    }while (true);

}

main();
