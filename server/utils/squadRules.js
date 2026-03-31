/**
 * Squad Rules for Points Based Auction:
 * - Max 25 players total
 * - Max 8 overseas players can be bought
 * - Top 12 considered for points (max 4 overseas in top 12)
 * - Minimum squad: 3 Batsmen, 2 All-Rounders, 1 WK, 3 Bowlers
 * - Remaining 16 slots: any role
 */

const INDIAN_TEAMS = ['MI', 'CSK', 'RCB', 'KKR', 'DC', 'SRH', 'RR', 'GT', 'LSG', 'PBKS'];
const INDIA = 'India';

const isOverseas = (player) => player.country !== INDIA;

/**
 * Check if a team can buy a specific player
 * Returns { allowed: true } or { allowed: false, reason: '...' }
 */
const canBuyPlayer = (team, player, allTeamPlayers) => {
  const total = allTeamPlayers.length;

  // Max 25 players
  if (total >= 25) {
    return { allowed: false, reason: '❌ Squad full! Max 25 players allowed.' };
  }

  // Max 8 overseas
  if (isOverseas(player)) {
    const overseasCount = allTeamPlayers.filter(p => isOverseas(p)).length;
    if (overseasCount >= 8) {
      return { allowed: false, reason: '❌ Max 8 overseas players allowed!' };
    }
  }

  return { allowed: true };
};

/**
 * Get top 12 players for points calculation
 * Rules: sort by points desc, max 4 overseas in top 12
 */
const getTop12 = (players) => {
  const sorted = [...players].sort((a, b) => (b.points || 0) - (a.points || 0));

  const top12 = [];
  let overseasInTop12 = 0;

  for (const player of sorted) {
    if (top12.length >= 12) break;

    if (isOverseas(player)) {
      if (overseasInTop12 < 4) {
        top12.push(player);
        overseasInTop12++;
      }
      // Skip if already 4 overseas in top 12
    } else {
      top12.push(player);
    }
  }

  return top12;
};

/**
 * Calculate total points from top 12 players
 */
const calculateTop12Points = (players) => {
  const top12 = getTop12(players);
  return top12.reduce((sum, p) => sum + (p.points || 0), 0);
};

/**
 * Check squad composition requirements
 * Returns list of unmet requirements
 */
const getSquadRequirements = (players) => {
  const batsmen    = players.filter(p => p.role === 'Batsman').length;
  const bowlers    = players.filter(p => p.role === 'Bowler').length;
  const allRounders= players.filter(p => p.role === 'All-Rounder').length;
  const wks        = players.filter(p => p.role === 'Wicket-Keeper').length;
  const overseas   = players.filter(p => isOverseas(p)).length;
  const total      = players.length;

  return {
    total,
    overseas,
    batsmen,
    bowlers,
    allRounders,
    wks,
    meetsMinimum: batsmen >= 3 && bowlers >= 3 && allRounders >= 2 && wks >= 1,
    requirements: {
      batsmen:     { current: batsmen,     min: 3, met: batsmen >= 3 },
      bowlers:     { current: bowlers,     min: 3, met: bowlers >= 3 },
      allRounders: { current: allRounders, min: 2, met: allRounders >= 2 },
      wks:         { current: wks,         min: 1, met: wks >= 1 },
      overseas:    { current: overseas,    max: 8, ok: overseas <= 8 },
      total:       { current: total,       max: 25, ok: total <= 25 },
    }
  };
};

module.exports = { canBuyPlayer, getTop12, calculateTop12Points, getSquadRequirements, isOverseas };