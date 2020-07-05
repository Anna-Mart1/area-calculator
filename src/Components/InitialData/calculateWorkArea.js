export const calculateWorkArea = ({
                               bottomLength,
                               bottomWidth,
                               horizonLength,
                               horizonWidth,
                               overlap,
                               depth,
                               slopeAngle,
                               slopeRatio,
                               depthSelect,
                               slopeAngleSelect,
                               slopeRatioSelect,
                           }) => {
let slopeAreaByDepth, slopeAreaBySlopeAngle, slopeAreaBySlopeRatio;
let bottomArea = bottomLength * bottomWidth;
let overlapArea = (horizonLength + overlap * 2) * (horizonWidth + overlap * 2) - horizonLength * horizonWidth;
if (depth && depthSelect) {
    let slopeLengthByLength = Math.sqrt(Math.pow(depth, 2) + Math.pow((horizonLength-bottomLength)/2, 2));
    let slopeLengthByWidth = Math.sqrt(Math.pow(depth, 2) + Math.pow((horizonWidth-bottomWidth)/2, 2));

    slopeAreaByDepth = ((bottomLength + horizonLength) / 2 * slopeLengthByLength +
        (bottomWidth + horizonWidth) / 2 * slopeLengthByWidth)*2;
} else slopeAreaByDepth = null;
    if (slopeAngle && slopeAngleSelect) {
        let slopeLengthByLength = (horizonLength-bottomLength)/2 / Math.cos(slopeAngle * Math.PI / 180);
        let slopeLengthByWidth = (horizonWidth-bottomWidth)/2 / Math.cos(slopeAngle * Math.PI / 180);
        slopeAreaBySlopeAngle = ((bottomLength + horizonLength) / 2 * slopeLengthByLength +
            (bottomWidth + horizonWidth) / 2 * slopeLengthByWidth) * 2;
    } else slopeAreaBySlopeAngle = null;
    if (slopeRatio && slopeRatioSelect) {
        let slopeLengthByLength = (horizonLength-bottomLength)/2 / Math.cos(slopeAngle * Math.PI / 180);
        let slopeLengthByWidth = (horizonWidth-bottomWidth)/2 / Math.cos(slopeAngle * Math.PI / 180);
        slopeAreaBySlopeRatio = ((bottomLength + horizonLength) / 2 * slopeLengthByLength +
            (bottomWidth + horizonWidth) / 2 * slopeLengthByWidth) * 2;
    } else slopeAreaBySlopeRatio = null;
    return {bottomArea, overlapArea, slopeAreaByDepth, slopeAreaBySlopeAngle, slopeAreaBySlopeRatio}
}