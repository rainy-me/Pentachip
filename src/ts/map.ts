import GameChip from "./gamechip";
import Renderable from "./renderable";
import { BoardInterface, BoardPaths, BoardState, Direction as d, DirectionMap, GameChipPosition } from "./type";

export default class DefaultBoard extends Renderable implements BoardInterface {

    public paths: BoardPaths;
    public directionMap: DirectionMap;

    constructor() {
        super();
        this.paths = [];

        const axis = [...Array(5).keys()];

        axis.map((x) => {
            const _x = x + 1;
            this.paths.push({
                from: [_x, 1],
                to: [_x, 5],
            });

            this.paths.push({
                from: [1, _x],
                to: [5, _x],
            });
        });

        this.paths = this.paths.concat([
            {
                from: [1, 1],
                to: [5, 5],
            },
            {
                from: [1, 5],
                to: [5, 1],
            },
        ]);

        this.paths = this.paths.concat([
            {
                from: [3, 1],
                to: [1, 3],
            },
            {
                from: [1, 3],
                to: [3, 5],
            },
            {
                from: [3, 5],
                to: [5, 3],
            }, {
                from: [5, 3],
                to: [3, 1],
            },
        ]);

        const tDown = [d.Left, d.Down, d.Right];
        const tRight = [d.Top, d.Down, d.Right];
        const tLeft = [d.Top, d.Down, d.Left];
        const tTop = [d.Top, d.Right, d.Left];

        const cross = [d.Left, d.Top, d.Down, d.Right];
        const saltire = [d.TopLeft, d.TopRight, d.DownLeft, d.DownRight];

        this.directionMap = {

            "1-1": [d.Right, d.Down, d.DownRight],
            "2-1": [...tDown],
            "3-1": [...tDown, d.DownLeft, d.DownRight],
            "4-1": [...tDown],
            "5-1": [d.Left, d.DownLeft, d.Down],

            "1-2": [...tRight],
            "2-2": [...cross, ...saltire],
            "3-2": [...cross],
            "4-2": [...cross, ...saltire],
            "5-2": [...tLeft],

            "1-3": [...tRight, d.TopRight, d.DownRight],
            "2-3": [...cross],
            "3-3": [...cross, ...saltire],
            "4-3": [...cross],
            "5-3": [...tLeft, d.TopLeft, d.DownLeft],

            "1-4": [...tRight],
            "2-4": [...cross, ...saltire],
            "3-4": [...cross],
            "4-4": [...cross, ...saltire],
            "5-4": [...tLeft],

            "1-5": [d.Right, d.Top, d.TopRight],
            "2-5": [...tTop],
            "3-5": [...tTop, d.TopLeft, d.TopRight],
            "4-5": [...tTop],
            "5-5": [d.Left, d.TopLeft, d.Top],

        };
    }

    public load(): BoardState {

        const map: GameChipPosition[] = [];
        const chips: GameChip[] = [];

        const axis = [...Array(5).keys()];

        axis.map((x) => {
            axis.map((y) => {
                map.push({ x: x + 1, y: y + 1 });
            });
        });

        axis.map((x) => {
            chips.push(
                new GameChip({ x: x + 1, y: 1 }, "P1"),
            );
            chips.push(
                new GameChip({ x: x + 1, y: 5 }, "P2"),
            );
        });

        return {
            map,
            chips,
        };
    }

    public render() {

        this._ctx.fillStyle = this._config.COLOR.BACKGROUND;
        this._ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

        this.paths.map((path) => {

            this._ctx.strokeStyle = this._config.COLOR.GRID_LINE;
            this._ctx.shadowBlur = 0;
            this._ctx.beginPath();
            this._ctx.moveTo(
                path.from[0] * this._config.LATTICE.SIZE,
                path.from[1] * this._config.LATTICE.SIZE,
            );
            this._ctx.lineTo(
                path.to[0] * this._config.LATTICE.SIZE,
                path.to[1] * this._config.LATTICE.SIZE,
            );
            this._ctx.lineWidth = 1;
            this._ctx.stroke();
            this._ctx.closePath();
        });
    }
}
