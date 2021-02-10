// Must make class and methods for the roles
// ex. Attack, SpecialAttack, SpecialSkill
export class Roles {
    constructor(name, stats, skills) {
        this.name = name;
        this.stats = {
            speed: 100,
            buff: 100,
            health: 100,
            iq: 100
        };
        this.skills = skills;
    }
    // The Abilities that the roles can have (heal, speedboost, damageboost, moredamage)
    healAbility() {
        if (this.stats.health <= 100) {
            this.stats.health += 50;
        } else if (this.stats.health >= 100) {
            // Must make it so that the health returns to 100, or the original health +50 as long as it is under or equal to 100
            this.stats.health -= 50;
        }
    }

    speedBoostAbility() {

    }

    damageBoostAbility() {

    }

    criticalAbility() {

    }

    gotHit() {

    }
}

