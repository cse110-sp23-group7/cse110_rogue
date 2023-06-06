const Player = require('../../js/player.js');

describe('Player', () => {
  let player;

  beforeEach(() => {
    const playerJson = {
      applied_fortunes: [],
      effects: {
        rest: 50,
        happiness: 75,
        skills: {
          test_taking: 90,
          coding: 60,
          thinking: 80
        }
      }
    };
    player = new Player(playerJson);
  });

  describe('add_statistic', () => {
    it('should add two numbers together', () => {
      expect(player.add_statistic(10, 20)).toBe(30);
    });

    it('should limit the result to a maximum of 100', () => {
      expect(player.add_statistic(90, 30)).toBe(100);
    });

    it('should limit the result to a minimum of 0', () => {
      expect(player.add_statistic(10, -20)).toBe(0);
    });
  });

  describe('add_effect', () => {
    it('should apply the effects of an effect to player statistics', () => {
      const effect = {
        effects: {
          rest: -10,
          happiness: 20,
          skills: {
            test_taking: 5,
            coding: -15,
            thinking: 10
          }
        }
      };

      player.add_effect(effect);

      expect(player.player_obj.effects.rest).toBe(40);
      expect(player.player_obj.effects.happiness).toBe(95);
      expect(player.player_obj.effects.skills.test_taking).toBe(95);
      expect(player.player_obj.effects.skills.coding).toBe(45);
      expect(player.player_obj.effects.skills.thinking).toBe(90);
    });
  });

  describe('add_fortune', () => {
    it('should apply the effects of a fortune to player statistics', () => {
      const fortune = {
        title: 'Good Fortune',
        effects: {
          rest: 5,
          happiness: 10,
          skills: {
            test_taking: 5,
            coding: 10,
            thinking: 5
          }
        }
      };

      player.add_fortune(fortune);

      expect(player.player_obj.effects.rest).toBe(55);
      expect(player.player_obj.effects.happiness).toBe(85);
      expect(player.player_obj.effects.skills.test_taking).toBe(95);
      expect(player.player_obj.effects.skills.coding).toBe(70);
      expect(player.player_obj.effects.skills.thinking).toBe(85);

      expect(player.player_obj.applied_fortunes).toContain('Good Fortune');
    });
  });

  describe('to_json', () => {
    it('should convert the player object to a JSON object', () => {
      const playerJson = JSON.parse(player.to_json());
      expect(playerJson).toEqual(player);    
    });
  });
});