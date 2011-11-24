var FacetBaseTester = TestCase('Facet.base');

FacetBaseTester.prototype.testExists = function () {
    assertTrue(Facet !== undefined);
};

FacetBaseTester.prototype.testNestedProperty = function () {
    assertTrue(Facet.nestedProperty instanceof Function);
    assertEquals(
        "Default return undefined",
        undefined,
        Facet.nestedProperty({}, 'unexisting')
    );
    assertEquals(
        "Default return undefined (sub property)",
        undefined,
        Facet.nestedProperty({ sub: {}}, 'sub.unexisting')
    );
    assertEquals(
        "Request value, not nested",
        5,
        Facet.nestedProperty({ test: 5 }, 'test')
    );
    assertEquals(
        "Request value, nested",
        5,
        Facet.nestedProperty({ sub: { test: 5 }}, 'sub.test')
    );
    assertEquals(
        "Unexisting value, nested deep",
        undefined,
        Facet.nestedProperty({}, 'sub.sub.sub.property')
    );
};

FacetBaseTester.prototype.testParseOptions = function () {
    assertTrue(Facet.parseOptions instanceof Function);

    assertEquals(
        "Empty string gives empty object",
        {},
        Facet.parseOptions('')
    );

    assertEquals(
        "Values separated by , must be detected",
        { test: 'test', other: 'dummy' },
        Facet.parseOptions('test=test,other=dummy')
    );

    assertEquals(
        "If no value given, assume boolean true",
        { test: 'test', other: true },
        Facet.parseOptions('test=test,other')
    );
};