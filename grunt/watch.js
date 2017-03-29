module.exports =
{
    script: 
    {
        files: ['src/**/*.*'],
        tasks: ['spell', 'tslint', 'ts', 'cssmin', 'react', 'uglify:js',
    'uglify:jsx', 'hashres:prod', 'copy:main']
    },
    html:
    {
        options:
        {
            livereload: true
        },
        files: 'index.html',
        tasks: 'copy:main'
    }
};