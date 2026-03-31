const INDIA = 'India';

const isOverseas = (player) => player.country !== INDIA;

/**
 * Check if a team can buy a specific player
 */
const canBuyPlayer = (team, player, allTeamPlayers) => {
  const total = allTeamPlayers.length;

  if (total >= 25) {
    return { allowed: false, reason: '❌ Squad full! Max 25 players allowed.' };
  }

  if (isOverseas(player)) {
    const overseasCount = allTeamPlayers.filter(p => isOverseas(p)).length;
    if (overseasCount >= 8) {
      return { allowed: false, reason: '❌ Max 8 overseas players allowed!' };
    }
  }

  return { allowed: true };
};

/**
 * Get top 12 players enforcing role minimums
 * - Min 1 WK, 3 BAT, 3 BOW, 2 AR in top 12
 * - Max 4 overseas in top 12
 * - Missing mandatory slots = null (0 points)
 * - Remaining 3 flex slots = best remaining players
 */
const getTop12 = (players) => {
  const all = players.filter(Boolean);

  const byRole = {
    'Batsman':       all.filter(p => p.role === 'Batsman').sort((a,b) => b.points - a.points),
    'Bowler':        all.filter(p => p.role === 'Bowler').sort((a,b) => b.points - a.points),
    'All-Rounder':   all.filter(p => p.role === 'All-Rounder').sort((a,b) => b.points - a.points),
    'Wicket-Keeper': all.filter(p => p.role === 'Wicket-Keeper').sort((a,b) => b.points - a.points),
  };

  const top12 = [];
  const used  = new Set();
  let overseasCount = 0;

  const addPlayer = (player) => {
    if (!player || used.has(player._id?.toString())) return false;
    if (isOverseas(player) && overseasCount >= 4) return false;
    top12.push(player);
    used.add(player._id?.toString());
    if (isOverseas(player)) overseasCount++;
    return true;
  };

  // Step 1: Fill 1 WK (mandatory)
  let wkFilled = 0;
  for (const p of byRole['Wicket-Keeper']) {
    if (wkFilled >= 1) break;
    if (addPlayer(p)) wkFilled++;
  }
  while (wkFilled < 1) { top12.push(null); wkFilled++; }

  // Step 2: Fill 3 Batsmen (mandatory)
  let batFilled = 0;
  for (const p of byRole['Batsman']) {
    if (batFilled >= 3) break;
    if (addPlayer(p)) batFilled++;
  }
  while (batFilled < 3) { top12.push(null); batFilled++; }

  // Step 3: Fill 3 Bowlers (mandatory)
  let bowFilled = 0;
  for (const p of byRole['Bowler']) {
    if (bowFilled >= 3) break;
    if (addPlayer(p)) bowFilled++;
  }
  while (bowFilled < 3) { top12.push(null); bowFilled++; }

  // Step 4: Fill 2 All-Rounders (mandatory)
  let arFilled = 0;
  for (const p of byRole['All-Rounder']) {
    if (arFilled >= 2) break;
    if (addPlayer(p)) arFilled++;
  }
  while (arFilled < 2) { top12.push(null); arFilled++; }

  // Step 5: Fill remaining 3 flex slots with best remaining players
  const remaining = all
    .filter(p => !used.has(p._id?.toString()))
    .sort((a, b) => b.points - a.points);

  for (const p of remaining) {
    const realSlots = top12.filter(Boolean).length;
    if (realSlots >= 12) break;
    addPlayer(p);
  }

  return top12; // may contain nulls = 0 point slots
};

/**
 * Calculate points from top 12
 * null slots = 0 points
 */
const calculateTop12Points = (players) => {
  const top12 = getTop12(players);
  return top12.reduce((sum, p) => sum + (p ? (p.points || 0) : 0), 0);
};

/**
 * Get squad requirements checked against TOP 12 only
 */
const getSquadRequirements = (players) => {
  const all    = players.filter(Boolean);
  const top12  = getTop12(all).filter(Boolean); // remove nulls for counting

  const batsmen     = top12.filter(p => p.role === 'Batsman').length;
  const bowlers     = top12.filter(p => p.role === 'Bowler').length;
  const allRounders = top12.filter(p => p.role === 'All-Rounder').length;
  const wks         = top12.filter(p => p.role === 'Wicket-Keeper').length;
  const overseas    = all.filter(p => isOverseas(p)).length; // full squad overseas
  const total       = all.length;

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