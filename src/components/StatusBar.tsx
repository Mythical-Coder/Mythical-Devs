import React from 'react';
import { Trophy, Zap, Heart } from 'lucide-react';

interface StatusBarProps {
  level: number;
  health: number;
  mana: number;
  xp: number;
}

const StatusBar: React.FC<StatusBarProps> = ({ level, health, mana, xp }) => {
  return (
    <div className="bg-cyber-darker border-b border-neon-blue/30 py-2 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-6">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <span className="font-cyber text-xs text-neon-green">LVL {level}</span>
            <div className="h-4 w-8 rounded-full bg-cyber-dark border border-neon-green flex items-center justify-center">
              <span className="text-[8px] font-cyber text-neon-green">{level}</span>
            </div>
          </div>
          
          <div className="flex gap-3 items-center w-full sm:w-auto">
            <Heart size={14} className="text-red-500" />
            <div className="health-bar w-24 sm:w-32">
              <div 
                className="health-bar-fill"
                style={{ width: `${health}%` }}
              ></div>
            </div>
            <span className="text-xs font-cyber">{health}%</span>
          </div>
          
          <div className="flex gap-3 items-center w-full sm:w-auto">
            <Zap size={14} className="text-blue-500" />
            <div className="mana-bar w-24 sm:w-32">
              <div 
                className="mana-bar-fill"
                style={{ width: `${mana}%` }}
              ></div>
            </div>
            <span className="text-xs font-cyber">{mana}%</span>
          </div>
          
          <div className="flex gap-3 items-center w-full sm:w-auto">
            <Trophy size={14} className="text-yellow-500" />
            <div className="xp-bar w-24 sm:w-32">
              <div 
                className="xp-bar-fill"
                style={{ width: `${xp}%` }}
              ></div>
            </div>
            <span className="text-xs font-cyber">{xp}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;