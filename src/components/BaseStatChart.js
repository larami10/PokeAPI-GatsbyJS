import React from "react";
import "../styles/BaseStatChart.scss";

/**
 * Create a chart to display the base stats of selected Pokemon.
 * Each chart will dynamically calculate the max value in the chart.
 * User can hover over the stats to get a better look at the stat
 * they're viewing.
 *
 * stats are: hp, attack, defense, special attack, special defense, speed
 */
const BaseStatChart = ({ stats }) => {
  const max = Math.max(...Object.values(stats));

  return (
    <>
      <table
        className="charts-css bar show-primary-axis
                show-4-secondary-axes
                data-spacing-4 show-heading show-labels"
        id="base-stats"
      >
        <caption> Base Stats </caption>
        <tbody>
          <tr>
            <th scope="row">HP</th>
            <td
              style={{
                "--size": `calc( ${stats.hp} / ${max} )`,
              }}
            >
              {stats.hp}
            </td>
          </tr>
          <tr>
            <th scope="row">Attack</th>
            <td
              style={{
                "--size": `calc( ${stats.attack} / ${max} )`,
              }}
            >
              {stats.attack}
            </td>
          </tr>
          <tr>
            <th scope="row">Defense</th>
            <td
              style={{
                "--size": `calc( ${stats.defense} / ${max} )`,
              }}
            >
              {stats.defense}
            </td>
          </tr>
          <tr>
            <th scope="row">S. Attack</th>
            <td
              style={{
                "--size": `calc( ${stats.special_attack} / ${max} )`,
              }}
            >
              {stats.special_attack}
            </td>
          </tr>
          <tr>
            <th scope="row">S. Defense</th>
            <td
              style={{
                "--size": `calc( ${stats.special_defense} / ${max} )`,
              }}
            >
              {stats.special_defense}
            </td>
          </tr>
          <tr>
            <th scope="row">Speed</th>
            <td
              style={{
                "--size": `calc( ${stats.speed} / ${max} )`,
              }}
            >
              {stats.speed}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default BaseStatChart;
