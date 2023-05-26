class Player {
    /**
     * Creates a new player instance from json object
     * 
     * @param {Object} player_json - json object representing player
     */
    constructor(player_json) {
        this.effects.rest = player_json["effects"]["rest"];
        this.effects.happiness = player_json["effects"]["happiness"];
        this.effects.skills.test_taking = player_json["effects"]["skills"]["test_taking"];
        this.effects.skills.coding = player_json["effects"]["skills"]["coding"];
        this.effects.skills.thinking = player_json["effects"]["skills"]["thinking"];
        this.applied_fortunes = player_json["applied_fortunes"];
    }

    /**
     * Adds two numbers together, and makes sure that the maximum is 100, and minimum is 0
     * 
     * @param {int} a - first number
     * @param {int} b - second number
     * @returns {int} - result of adding a and b
     */
    add_statistic(a, b) {
        let c = a + b;
        if (c <= 100 && c >= 0) {
            return c;
        }
        if (c < 0) {
            return 0;
        }
        return 100;
    }

    /**
     * Applies the effects of a fortune/encounter to the player statistics
     * 
     * @param {Object} effect - json object representing effect being applied
     */
    add_effect(effect) {
        this.effects.rest = this.add_statistic(this.rest, effect["effects"]["rest"]);
        this.effects.happiness = this.add_statistic(this.happiness, effect["effects"]["happiness"]);
        this.effects.skills.test_taking = this.add_statistic(this.rest, effect["effects"]["skills"]["test_taking"]);
        this.effects.skills.coding = this.add_statistic(this.rest, effect["effects"]["skills"]["coding"]);
        this.effects.skills.thinking = this.add_statistic(this.rest, effect["effects"]["skills"]["thinking"]);
    }

    /**
     * Applies the effects of a fortune to the player statistics
     * Adds the fortnue name to the applied_fortunes array
     * 
     * @param {Object} fortune - json object representing fortune being applied
     */
    add_fortune(fortune) {
        this.add_effect(fortune);
        this.applied_fortunes.push(fortune["title"]);
    }

    /**
     * Turns the current player object into a json object
     * Each player has the following properties:
     * ```json
     * {
     *     "applied_fortunes": ["fortune1", "fortune2"],
     *     "effects": {
     *         "rest": <Integer>,
     *         "happiness": <Integer>,
     *         "skills": {
     *             "test_taking": <Integer>,
     *             "coding": <Integer>,
     *             "thinking": <Integer>
     *         }
     *     }
     * }
     * ```
     * 
     * @returns {Object} - json object representing the player
     */
    to_json() {
        JSON.stringify(this);
    }
}