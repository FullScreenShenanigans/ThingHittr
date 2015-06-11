declare module ThingHittr {
    interface IThingHittrSettings {
        // The Function generators used for each group to test if a contained 
        // Thing may collide, keyed by group name.
        globalCheckGenerators: IThingGroupCheckGeneratorContainer;

        // The Function generators used for hitChecks, as an Object with sub-Objects
        // for each group, which have sub-Objects for each group they may collide 
        // with.
        hitCheckGenerators: IThingHitCheckGeneratorGroupContainer;

        // The Function generators used for collisions, as an Object with 
        // sub- Objects for each group, which have sub- Objects for each group they
        // they may collide with.
        hitFunctionGenerators: IThingHitFunctionGeneratorGroupContainer;

        // The listing of the names of groups that may collide with each other.
        groupNames: string[];

        // The key under which Things store their number of quadrants (by default, 
        // "numquads").
        keyNumQuads?: string;

        // They key under which Things store their quadrants (by default, "quadrants").
        keyQuadrants?: string;

        // The key under which Things store which group they fall under (by default,
        // "group").
        keyGroupName?: string;
    }

    // Determines whether a group of Things may all have hits checked.
    interface IThingGroupCheck {
        (): boolean;
    }

    /**
     * Checks all possible hits for a single Thing, calling the respective hit 
     * Function when any are found.
     */
    interface IThingHitsCheck {
        (thing: QuadsKeepr.IThing): void;
    }

    /** 
     * Determines whether a Thing collides with another Thing.
     */
    interface IThingHitCheck {
        (thing: QuadsKeepr.IThing, other: QuadsKeepr.IThing): boolean;
    }

    /**
     * Callback for when a Thing collides with another Thing.
     */
    interface IThingHitFunction {
        (thing: QuadsKeepr.IThing, other: QuadsKeepr.IThing): void;
    }

    /**
     * Generator Function to create IThingGroupCheck Functions.
     */
    interface IThingGroupCheckGenerator {
        (): IThingGroupCheck;
    }

    /**
     * Generator Function to create IThingHitCheck Functions.
     */
    interface IThingHitsCheckGenerator {
        (): IThingHitsCheck;
    }

    /**
     * Generator Function to create IThingHitCheck Functions.
     */
    interface IThingHitCheckGenerator {
        (): IThingHitCheck;
    }

    /**
     * Generator Function to generate IThingHitFunction Functions.
     */
    interface IThingHitFunctionGenerator {
        (): IThingHitFunction;
    }

    /**
     * Container to hold IThingGroupCheck Functions, keyed by their respective group.
     */
    interface IThingGroupCheckContainer {
        [i: string]: IThingGroupCheck;
    }

    /**
     * Container to hold IThingHitsCheck Functions, keyed by their respective type.
     */
    interface IThingHitsCheckContainer {
        [i: string]: IThingHitsCheck;
    }

    /**
     * Container to hold IThingHitCheck Functions, keyed by their respective group.
     */
    interface IThingHitCheckContainer {
        [i: string]: IThingHitCheck;
    }

    /**
     * Container to hold IThingHitFunction groups, keyed by their respective types.
     */
    interface IThingHitFunctionContainer {
        [i: string]: IThingHitFunction;
    }

    /**
     * Container to hold IThingHitCheckContainer containers, keyed by their 
     * respective types.
     */
    interface IThingHitCheckGroupContainer {
        [i: string]: IThingHitCheckContainer;
    }

    /**
     * Container to hold IThingHitFunctionContainer containers, keyed by their 
     * respective groups.
     */
    interface IThingHitFunctionGroupContainer {
        [i: string]: IThingHitFunctionContainer;
    }

    /**
     * Container to hold IThingGroupCheckGenerator Functions, keyed by their
     * respective groups.
     */
    interface IThingGroupCheckGeneratorContainer {
        [i: string]: IThingGroupCheckGenerator;
    }

    /**
     * Container to hold IThingHitCheckGenerator Functions, keyed by their 
     * respective groups.
     */
    interface IThingHitCheckGeneratorContainer {
        [i: string]: IThingHitCheckGenerator;
    }

    /**
     * Container to hold IThingHitFunctionGenerator Functions, keyed by their
     * respective types.
     */
    interface IThingHitFunctionGeneratorContainer {
        [i: string]: IThingHitFunctionGenerator;
    }

    /**
     * Container to hold IThingHitCheckGeneratorContainer containers, keyed by their
     * respective groups.
     */
    interface IThingHitCheckGeneratorGroupContainer {
        [i: string]: IThingHitCheckGeneratorContainer;
    }

    /**
     * Container to hold IThingHitFunctionGeneratorContainer containers, keyed by
     * their respective groups.
     */
    interface IThingHitFunctionGeneratorGroupContainer {
        [i: string]: IThingHitFunctionGeneratorContainer;
    }

    /**
     * Cache lookup for whether a Thing has had its hit checks generated.
     */
    interface IThingGeneratedListing {
        [i: string]: boolean;
    }

    export interface IThingHittr {

    }
}