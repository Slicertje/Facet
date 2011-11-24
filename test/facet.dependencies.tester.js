var FacetDependenciesTester = TestCase('Dependencies');

FacetDependenciesTester.prototype.testGsub = function () {
    assertNotUndefined($.gsub);

    assertEquals(
        'Replacing a single part',
        'aaatestbbbb',
        $.gsub('aaadummybbbb', 'dummy', 'test')
    );

    assertEquals(
        'Replacing multiple parts',
        'abbabb',
        $.gsub('abcabc', 'c', 'b')
    );
};