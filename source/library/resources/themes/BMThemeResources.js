"use strict"

/*

    BMThemeResources

    hierarchy:

        BMThemeResources -> Theme -> ThemeClass -> ThemeState -> ThemeAttribute
        global           -> "Dark" -> "Field"   -> "active"   -> "opacity" : "0.5"

    Example use by views:

        BMThemeResources.shared().currentTheme().classNamed("x").attributeNamed("y").value()

    We'd like to implement some form  of inheritance system.
    Example:

    The ThemeClass "FieldValue" has a "unselected" ThemeState, but no "active" ThemeState, 
    so we default to the "unselected" ThemeState.

    Should ThemeClass implement a defaultSubnode() method for failed lookups?
    Should it ask subnodes isDefault()?


*/

window.BMThemeResources = class BMThemeResources extends BMStorableNode {
    
    initThisClass () {
        super.initThisClass()
        this.setIsSingleton(true)
    }

    initPrototype () {

    }

    init () {
        super.init()
        this.setTitle("Themes")

        this.setShouldStore(true)
        this.setShouldStoreSubnodes(true)

        this.setNoteIsSubnodeCount(true)
        this.setNodeMinWidth(200)
        this.addAction("add")
        this.setSubnodeClasses([BMThemeFolder])
        this.setNodeCanReorderSubnodes(true)
    }
    
}.initThisClass()
