export interface AvatarStage {
  level: number;
  name: string;
  spritePath: string;
  frameWidth: number;
  frameHeight: number;
  frameCount: number;
  rowCount: number;
  scale: number;
  offsetX: number;
  offsetY: number;
  directionMap: {
    down: number;
    left: number;
    right: number;
    up: number;
  };
}

export interface Avatar {
  id: number;
  name: string;
  category: 'civilian' | 'warrior' | 'mage' | 'rogue' | 'noble';
  unlockRequirement?: {
    type: 'playerLevel';
    count: number;
  };
  stages: AvatarStage[];
}

export const avatars: Avatar[] = [
  {
    id: 1,
    name: 'Male Civilian',
    category: 'civilian',
    // No unlock requirement - available from start
    stages: [
      {
        level: 1,
        name: 'Male Civilian',
        spritePath: '/lv1_male_civilian.png',
        frameWidth: 64,
        frameHeight: 64,
        frameCount: 6,
        rowCount: 4,
        scale: 2,
        offsetX: 0,
        offsetY: 0,
        directionMap: {
          down: 0,  // Bottom row
          left: 1,  // Left row
          right: 2, // Right row
          up: 3,    // Up row
        },
      },
      {
        level: 2,
        name: 'Swordsman',
        spritePath: '/lv2_swordsman.png',
        frameWidth: 64,
        frameHeight: 64,
        frameCount: 6,
        rowCount: 4,
        scale: 2,
        offsetX: 0,
        offsetY: 0,
        directionMap: {
          down: 0,  // Bottom row
          left: 1,  // Left row
          right: 2, // Right row
          up: 3,    // Up row
        },
      },
    ],
  },
  {
    id: 2,
    name: 'Female Civilian',
    category: 'civilian',
    // No unlock requirement - available from start
    stages: [
      {
        level: 1,
        name: 'Female Civilian',
        spritePath: '/lv1_female_civilian.png',
        frameWidth: 64,
        frameHeight: 64,
        frameCount: 6,
        rowCount: 4,
        scale: 2,
        offsetX: 0,
        offsetY: 0,
        directionMap: {
          down: 0,  // Bottom row
          left: 1,  // Left row
          right: 2, // Right row
          up: 3,    // Up row
        },
      },
      {
        level: 2,
        name: 'Swordswoman',
        spritePath: '/lv2_swordswoman.png',
        frameWidth: 64,
        frameHeight: 64,
        frameCount: 6,
        rowCount: 4,
        scale: 2,
        offsetX: 0,
        offsetY: 0,
        directionMap: {
          down: 0,  // Bottom row
          left: 1,  // Left row
          right: 2, // Right row
          up: 3,    // Up row
        },
      },
    ],
  },
  {
    id: 5,
    name: 'Slime',
    category: 'mage',
    unlockRequirement: {
      type: 'playerLevel',
      count: 2,
    },
    stages: [
      {
        level: 2,
        name: 'Slime',
        spritePath: '/lv1_slime.png',
        frameWidth: 64,
        frameHeight: 64,
        frameCount: 8,
        rowCount: 4,
        scale: 2,
        offsetX: 0,
        offsetY: 0,
        directionMap: {
          down: 0,  // Bottom row
          up: 1,    // Up row
          left: 2,  // Left row
          right: 3, // Right row
        },
      },
      {
        level: 3,
        name: 'Bone Bobba',
        spritePath: '/lv3_bone_bobba.png',
        frameWidth: 64,
        frameHeight: 64,
        frameCount: 8,
        rowCount: 4,
        scale: 2,
        offsetX: 0,
        offsetY: 0,
        directionMap: {
          down: 0,  // Bottom row
          up: 1,    // Up row
          left: 2,  // Left row
          right: 3, // Right row
        },
      },
      {
        level: 5,
        name: 'Lava Lime',
        spritePath: '/lv5_lava_lime.png',
        frameWidth: 64,
        frameHeight: 64,
        frameCount: 8,
        rowCount: 4,
        scale: 2,
        offsetX: 0,
        offsetY: 0,
        directionMap: {
          down: 0,  // Bottom row
          up: 1,    // Up row
          left: 2,  // Left row
          right: 3, // Right row
        },
      },
    ],
  },
  {
    id: 3,
    name: 'Orc',
    category: 'warrior',
    unlockRequirement: {
      type: 'playerLevel',
      count: 3,
    },
    stages: [
      {
        level: 3,
        name: 'Orc',
        spritePath: '/lv3_orc.png',
        frameWidth: 64,
        frameHeight: 64,
        frameCount: 6,
        rowCount: 4,
        scale: 2,
        offsetX: 0,
        offsetY: 0,
        directionMap: {
          down: 0,  // Bottom row
          up: 1,    // Up row
          left: 2,  // Left row
          right: 3, // Right row
        },
      },
      {
        level: 4,
        name: 'Sage Orc',
        spritePath: '/lv4_sage_orc.png',
        frameWidth: 64,
        frameHeight: 64,
        frameCount: 6,
        rowCount: 4,
        scale: 2,
        offsetX: 0,
        offsetY: 0,
        directionMap: {
          down: 0,  // Bottom row
          up: 1,    // Up row
          left: 2,  // Left row
          right: 3, // Right row
        },
      },
      {
        level: 5,
        name: 'Orc Shaman',
        spritePath: '/lv5_orc_shaman.png',
        frameWidth: 64,
        frameHeight: 64,
        frameCount: 6,
        rowCount: 4,
        scale: 2,
        offsetX: 0,
        offsetY: 0,
        directionMap: {
          down: 0,  // Bottom row
          up: 1,    // Up row
          left: 2,  // Left row
          right: 3, // Right row
        },
      },
    ],
  },
  {
    id: 4,
    name: 'Vampire',
    category: 'noble',
    unlockRequirement: {
      type: 'playerLevel',
      count: 3,
    },
    stages: [
      {
        level: 3,
        name: 'Vampire',
        spritePath: '/lv3_vampire.png',
        frameWidth: 64,
        frameHeight: 64,
        frameCount: 6,
        rowCount: 4,
        scale: 2,
        offsetX: 0,
        offsetY: 0,
        directionMap: {
          down: 0,  // Bottom row
          up: 1,    // Up row
          left: 2,  // Left row
          right: 3, // Right row
        },
      },
      {
        level: 4,
        name: 'Blue Dracula',
        spritePath: '/lv4_blue_dracula.png',
        frameWidth: 64,
        frameHeight: 64,
        frameCount: 6,
        rowCount: 4,
        scale: 2,
        offsetX: 0,
        offsetY: 0,
        directionMap: {
          down: 0,  // Bottom row
          up: 1,    // Up row
          left: 2,  // Left row
          right: 3, // Right row
        },
      },
      {
        level: 5,
        name: 'Count Dracula',
        spritePath: '/lv5_count_dracula.png',
        frameWidth: 64,
        frameHeight: 64,
        frameCount: 6,
        rowCount: 4,
        scale: 2,
        offsetX: 0,
        offsetY: 0,
        directionMap: {
          down: 0,  // Bottom row
          up: 1,    // Up row
          left: 2,  // Left row
          right: 3, // Right row
        },
      },
    ],
  },
];

// Helper functions for easy access
export const getAvatarById = (id: number): Avatar | undefined => {
  return avatars.find(avatar => avatar.id === id);
};

export const getAvatarStage = (avatarId: number, level: number = 1): AvatarStage | undefined => {
  const avatar = getAvatarById(avatarId);
  if (!avatar) return undefined;
  
  // Find the exact level or the closest available level
  const exactStage = avatar.stages.find(stage => stage.level === level);
  if (exactStage) return exactStage;
  
  // If exact level not found, return the highest available level that's <= requested level
  const availableStages = avatar.stages.filter(stage => stage.level <= level);
  if (availableStages.length > 0) {
    return availableStages.sort((a, b) => b.level - a.level)[0];
  }
  
  // Fallback to first stage
  return avatar.stages[0];
};

export const getAvailableAvatars = (playerLevel: number = 0): Avatar[] => {
  return avatars.filter(avatar => {
    if (!avatar.unlockRequirement) return true; // Always available
    return playerLevel >= avatar.unlockRequirement.count;
  });
};

export const getAllAvatarIds = (): number[] => {
  return avatars.map(avatar => avatar.id);
};

export const getNextAvatarStage = (avatarId: number, currentLevel: number): AvatarStage | undefined => {
  const avatar = getAvatarById(avatarId);
  if (!avatar) return undefined;
  
  const nextStage = avatar.stages.find(stage => stage.level > currentLevel);
  return nextStage;
};

// New helper functions for HUD improvements
export const getPortraitPath = (avatarId: number): string => {
  return `/portraits/avatar_${avatarId}_portrait.png`;
};

export const getAvatarSpriteFallbackInfo = (avatarId: number): {
  spritePath: string;
  frameWidth: number;
  frameHeight: number;
  frameCount: number;
  rowCount: number;
} | undefined => {
  const avatar = getAvatarById(avatarId);
  if (!avatar || !avatar.stages.length) return undefined;
  
  const stage = avatar.stages[0]; // Use first stage as fallback
  return {
    spritePath: stage.spritePath,
    frameWidth: stage.frameWidth,
    frameHeight: stage.frameHeight,
    frameCount: stage.frameCount,
    rowCount: stage.rowCount,
  };
};

// New helper function to check if avatar is unlocked for player
export const isAvatarUnlocked = (avatarId: number, playerLevel: number): boolean => {
  const avatar = getAvatarById(avatarId);
  if (!avatar) return false;
  
  if (!avatar.unlockRequirement) return true; // Always available
  return playerLevel >= avatar.unlockRequirement.count;
};

// Helper function to get unlock message for locked avatars
export const getAvatarUnlockMessage = (avatarId: number, playerLevel: number): string | null => {
  const avatar = getAvatarById(avatarId);
  if (!avatar || !avatar.unlockRequirement) return null;
  
  if (playerLevel >= avatar.unlockRequirement.count) return null; // Already unlocked
  
  const levelsNeeded = avatar.unlockRequirement.count - playerLevel;
  return `Locked! (${levelsNeeded} more level${levelsNeeded !== 1 ? 's' : ''} needed)`;
};

// Validation function to ensure all avatars have proper direction mappings
export const validateAvatarDirectionMappings = (): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  const requiredDirections = ['down', 'left', 'right', 'up'];
  
  avatars.forEach(avatar => {
    avatar.stages.forEach(stage => {
      // Check if directionMap exists
      if (!stage.directionMap) {
        errors.push(`Avatar ${avatar.name} (ID: ${avatar.id}) stage ${stage.level} is missing directionMap`);
        return;
      }
      
      // Check if all required directions are present
      requiredDirections.forEach(direction => {
        if (stage.directionMap[direction as keyof typeof stage.directionMap] === undefined) {
          errors.push(`Avatar ${avatar.name} (ID: ${avatar.id}) stage ${stage.level} is missing direction: ${direction}`);
        }
      });
      
      // Check if direction values are within valid range (0 to rowCount-1)
      Object.entries(stage.directionMap).forEach(([direction, rowIndex]) => {
        if (rowIndex < 0 || rowIndex >= stage.rowCount) {
          errors.push(`Avatar ${avatar.name} (ID: ${avatar.id}) stage ${stage.level} has invalid row index ${rowIndex} for direction ${direction}. Must be between 0 and ${stage.rowCount - 1}`);
        }
      });
    });
  });
  
  return {
    isValid: errors.length === 0,
    errors
  };
};