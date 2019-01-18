import _ from 'lodash';
import { positionsList } from './acroPositions';

export function randomGen(moves, diffs) {
  let selectedDiffPositions = positionsList;
  let positionsToUse = [];

  _.forEach(selectedDiffPositions, (pos, index) => {
    if(diffs.all){
      positionsToUse.push(index);
    } else {
      if(pos.difficulty === "beginner" && diffs.beginner){
        positionsToUse.push(index)
      }
      if(pos.difficulty === "intermediate" && diffs.intermediate){
        positionsToUse.push(index)
      }
      if(pos.difficulty === "advanced" && diffs.advanced){
        positionsToUse.push(index)
      }
    }
  })

  positionsToUse = _.shuffle(positionsToUse)
  return positionsToUse.slice(0, moves);
}