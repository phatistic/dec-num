//% color="#5899f5" icon="\uf2a1"
namespace btn {

    let anmt = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    //% blockid=decnum_dec2base
    //% block="convert $nvl in base $bvl to digit $dvl"
        //% group="dec operation"
    export function decEncode(nvl: number, bvl: number, dvl: number): string {
        let sti = ""
        let ani = nvl
        if (ani > 0) {
            while (ani > 0) {
                sti = "" + anmt.charAt(ani % bvl) + sti
                ani = Math.floor(ani / bvl)
            }
        } else {
            sti = anmt.charAt(0)
        }
        if (dvl <= 0) {
            return sti
        }
        if (dvl - sti.length > 0) {
            while (dvl - sti.length > 0) {
                sti = "" + anmt.charAt(0) + sti
            }
        }
        return sti
    }

    //% blockid=decnum_base2dec
    //% block="convert $tvl to dec in $bvl"
        //% group="dec operation"
    export function decDecode(tvl: string, bvl: number): number {
        let stl = tvl.length
        let vld = 0
        let nvl = 0
        let vix = 0
        for (let nix = 0; nix < tvl.length; nix++) {
            vix = anmt.indexOf(tvl.charAt((stl - 1) - nix))
            if (vld == 0) {
                nvl += vix
                vld = bvl
            } else {
                nvl += vix * vld
                vld = vld * bvl
            }
        }
        return nvl
    }

    //% blockid=decnum_decsum
    //% block="sum decimal in $nvl and $bvl"
        //% group="sum operation"
    export function sumDecimal(nvl: number, bvl: number): number {
        let dvl = 0
        while (nvl >= dvl) {
            if (dvl == 0) {
                dvl = bvl
            } else {
                dvl = dvl * bvl
            }
        }
        return dvl
    }

    //% blockid=decnum_declensum
    //% block="Sum Digit At $nvl In $bvl"
        //% group="sum operation"
    export function sumDecDigit(nvl: number, bvl: number): number {
        let dvl = 0
        let dvi = 0
        while (nvl >= dvl) {
            if (dvl == 0) {
                dvi += 1
                dvl = bvl
            } else {
                dvi += 1
                dvl = dvl * bvl
            }
        }
        return dvl
    }

    //% blockid=decnum_binxor
    //% block="Bin Xor in $sva and $svb"
        //% group="xor operation"
    export function BinXor(sva: string, svb: string): string {
        let tvl = ""
        if (sva.length != svb.length) {
            return tvl
        }
        for (let six: number = 0; six < sva.length; six++) {
            if (sva.charAt(six) != svb.charAt(six)) {
                tvl = "" + tvl + "1"
            } else {
                tvl = "" + tvl + "0"
            }
        }
        return tvl
    }



    //% blockid=decnum_dec2bin
    //% block="dec convert $nvl to bin in $dvl"
        //% group="bin and dec"
    export function dec2bin(nvl: number, dvl: number): string {
        let sti = ""
        let ani = nvl
        if (ani > 0) {
            while (ani > 0) {
                sti = "" + anmt.charAt(ani % 2) + sti
                ani = Math.floor(ani / 2)
            }
        } else {
            sti = anmt.charAt(0)
        }
        if (dvl <= 0) {
            return sti
        }
        if (dvl - sti.length > 0) {
            while (dvl - sti.length > 0) {
                sti = "" + anmt.charAt(0) + sti
            }
        }
        return sti
    }

    //% blockid=decnum_bin2dec
    //% block="bin convert $tvl to dec"
        //% group="bin and dec"
    export function bin2dec(tvl: string): number {
        let stl = tvl.length
        let vld = 0
        let nvl = 0
        let vix = 0
        for (let nix = 0; nix < tvl.length; nix++) {
            vix = anmt.indexOf(tvl.charAt((stl - 1) - nix))
            if (vld == 0) {
                nvl += vix
                vld = 2
            } else {
                nvl += vix * vld
                vld = vld * 2
            }
        }
        return nvl
    }

    //% blockid=decnum_dec2hex
    //% block="dec convert $nvl to hex in $dvl"
        //% group="hex and dec"
    export function dec2hex(nvl: number, dvl: number): string {
        let sti = ""
        let ani = nvl
        if (ani > 0) {
            while (ani > 0) {
                sti = "" + anmt.charAt(ani % 16) + sti
                ani = Math.floor(ani / 16)
            }
        } else {
            sti = anmt.charAt(0)
        }
        if (dvl <= 0) {
            return sti
        }
        if (dvl - sti.length > 0) {
            while (dvl - sti.length > 0) {
                sti = "" + anmt.charAt(0) + sti
            }
        }
        return sti
    }

    //% blockid=decnum_hex2dec
    //% block="hex convert $tvl to dec"
        //% group="hex and dec"
    export function hex2dec(tvl: string): number {
        let stl = tvl.length
        let vld = 0
        let nvl = 0
        let vix = 0
        for (let nix = 0; nix < tvl.length; nix++) {
            vix = anmt.indexOf(tvl.charAt((stl - 1) - nix))
            if (vld == 0) {
                nvl += vix
                vld = 16
            } else {
                nvl += vix * vld
                vld = vld * 16
            }
        }
        return nvl
    }

    //% blockid=decnum_dec2oct
    //% block="dec convert $nvl to oct in $dvl"
        //% group="oct and dec"
    export function dec2oct(nvl: number, dvl: number): string {
        let sti = ""
        let ani = nvl
        if (ani > 0) {
            while (ani > 0) {
                sti = "" + anmt.charAt(ani % 8) + sti
                ani = Math.floor(ani / 8)
            }
        } else {
            sti = anmt.charAt(0)
        }
        if (dvl <= 0) {
            return sti
        }
        if (dvl - sti.length > 0) {
            while (dvl - sti.length > 0) {
                sti = "" + anmt.charAt(0) + sti
            }
        }
        return sti
    }

    //% blockid=decnum_oct2dec
    //% block="oct convert $tvl to dec"
        //% group="oct and dec"
    export function oct2dec(tvl: string): number {
        let stl = tvl.length
        let vld = 0
        let nvl = 0
        let vix = 0
        for (let nix = 0; nix < tvl.length; nix++) {
            vix = anmt.indexOf(tvl.charAt((stl - 1) - nix))
            if (vld == 0) {
                nvl += vix
                vld = 8
            } else {
                nvl += vix * vld
                vld = vld * 8
            }
        }
        return nvl
    }

    //% blockid=decnum_numxor
    //% block="Xor $nma ^ $nmb"
        //% group="xor operation"
    export function NumXor(nma: number, nmb: number): number {
        return nma ^ nmb
    }

}

