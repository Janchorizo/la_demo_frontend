import React, {useRef, useLayoutEffect} from 'react';
import PropTypes from 'prop-types';
// internal
import style from './style.module.css';


/**
 * Link the label and target through the line element of the label SVG.
 * @param {object} svg HTML svg element
 * @param {string} targetId HTML id of the target
 */
function linkLabel(svg, targetId) {
  const target = document.getElementById(targetId);
  if (target === null) {
    console.error(
        `ERROR: components/label_card/label.js: #${targetId} not found.`,
    );
    return;
  }
  const targetBbox = target.getBoundingClientRect();
  const labelBbox = svg.parentElement.getBoundingClientRect();

  // By design the label is placed to the right, so the first parameter
  // must be negative and y coordinate inverted to match the SVG coordinate
  // system
  const x1 = (targetBbox.x + targetBbox.width) - labelBbox.x;
  const y1 = ((targetBbox.y + (targetBbox.height/2)) -
              (labelBbox.y + (labelBbox.height/2)));

  const line = svg.getElementsByTagName('line')[0];
  line.setAttribute('x1', x1);
  line.setAttribute('y1', y1);
}


/**
 * Link labels and targets when the position of the target is changed
 * @param {object} svgRef React reference object
 * @param {string} targetId HTML id of the target
 */
function useTargetLinking(svgRef, targetId) {
  useLayoutEffect(() => { // set the window resize listener
    return () => { // remove the event listener

    };
  }, [svgRef.current, targetId]);

  useLayoutEffect(() => { // link the label and target
    if (svgRef.current != null) {
      linkLabel(svgRef.current, targetId);
    }
  }, [svgRef.current, targetId]);
}


/**
 * Card label component.
 * @component
 * @return {React.Component}
 */
export default function LabelCard({children, target}) {
  const svgRef = useRef(null);

  useTargetLinking(svgRef, target);

  return (
    <div className={style.card}>
      <svg ref={svgRef}><line x1='0' y1='0' x2='0' y2='0'/></svg>
      <p>{children}</p>
    </div>);
}

LabelCard.propTypes = {
  target: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
